import { useDropzone } from 'react-dropzone';

const BasicDropzone = () => {
  const { getRootProps, getInputProps } = useDropzone();

  return (
    <div
      {...getRootProps({
        style: {
          border: '2px dashed #cccccc',
          padding: '20px',
          textAlign: 'center',
        },
      })}
    >
      <input {...getInputProps()} />
      <p>Drag & drop some files here, or click to select files</p>
    </div>
  );
};

export default BasicDropzone;
