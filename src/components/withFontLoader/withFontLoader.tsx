import { useEffect } from "react";
import WebFont from "webfontloader";

const withFontLoader = (WrappedComponent, fontFamilies) => {
  // Wrapper component that will inject font loading logic
  const Wrapper = (props) => {
    useEffect(() => {
      WebFont.load({
        google: {
          families: fontFamilies,
        },
      });
    }, []); // Empty dependency array ensures the effect runs only once

    return <WrappedComponent {...props} />; // Render the wrapped component with its props
  };

  return Wrapper;
};

export default withFontLoader;
