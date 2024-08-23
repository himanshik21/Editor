/* eslint-disable react/prop-types */

const Editor = ({ onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <textarea
      placeholder="Type your markdown here..."
      onChange={handleChange}
    />
  );
};

export default Editor;
