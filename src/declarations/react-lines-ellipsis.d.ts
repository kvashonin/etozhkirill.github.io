declare module 'react-lines-ellipsis' {
  /* eslint-disable-next-line */
  import React from 'react';

  interface ReactLinesEllipsisProps {
    basedOn?: 'letters' | 'words';
    className?: string;
    component?: string;
    ellipsis?: string;
    isClamped?: () => boolean;
    maxLine?: number | string;
    onReflow?: ({
      clamped,
      text
    }: {
      clamped: boolean;
      text: string;
    }) => unknown;
    style?: React.CSSProperties;
    text?: string;
    trimRight?: boolean;
    winWidth?: number;
  }

  class LinesEllipsis extends React.Component<ReactLinesEllipsisProps> {
    static defaultProps?: ReactLinesEllipsisProps;
  }

  export default LinesEllipsis;
}

declare module 'react-lines-ellipsis/lib/responsiveHOC' {
  import React from 'react';

  export default function responsiveHOC(): <P>(
    WrappedComponent: React.ComponentType<P>
  ) => React.ComponentClass<P>;
}
