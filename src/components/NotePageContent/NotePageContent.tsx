import classnames from 'classnames/bind';
import dynamic from 'next/dynamic';
import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import LazyImage from '@/components/LazyImage';
import Row from '@/components/Row';
import formatDate from '@/helpers/formatDate';
import GenericProps from '@/types/GenericProps';
import { NoteFileContent } from '@/types/NoteFileContent';

import styles from './NotePageContent.module.scss';

const cx = classnames.bind(styles);

const DynamicDisqus = dynamic(() => import('@/components/Disqus'), {
  ssr: false
});

interface Props extends GenericProps {
  note: NoteFileContent;
}

export default function NotePageContent({
  className,
  note,
  ...props
}: Props): React.ReactElement {
  return (
    <div className={cx('note-page-content-wrapper', className)} {...props}>
      <Container>
        <Row>
          <Col>
            <div className={cx('note-page-content')}>
              <h1 className={cx('note-page-content__title')}>
                {note.data.title}
              </h1>
              <div className={cx('note-page-content__date')}>
                {formatDate(note.data.date)}
              </div>
              <div className={cx('note-page-content__image')}>
                <LazyImage height={'400px'} adaptHeight src={note.data.image} />
              </div>
              <div
                className={cx('note-page-content__content')}
                dangerouslySetInnerHTML={{ __html: note.content }}
              />
              <div className={cx('note-page-content__comments')}>
                <DynamicDisqus note={note} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
