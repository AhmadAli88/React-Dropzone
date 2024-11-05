import { useDropzone } from 'react-dropzone';

const ImageDropzone = () => {
    const { getRootProps, getInputProps } = useDropzone({
      accept: { 'image/*': [] }
    });
  
    return (
      <div {...getRootProps({ style: { border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' } })}>
        <input {...getInputProps()} />
        <p>Only image files are accepted (e.g., .png, .jpg)</p>
      </div>
    );
  };
  
  export default ImageDropzone;
  