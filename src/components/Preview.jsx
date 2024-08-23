/* eslint-disable react/prop-types */

import { marked } from "marked";

const Preview = ({ content }) => {
  return (
    <div
      className="preview-content"
      dangerouslySetInnerHTML={{ __html: marked(content) }}
    />
  );
};

export default Preview;
