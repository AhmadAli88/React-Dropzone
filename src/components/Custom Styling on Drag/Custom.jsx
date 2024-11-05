import { useDropzone } from "react-dropzone";

const StyledDropzone = () => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone();
  
    const style = {
      border: '2px dashed #cccccc',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: isDragActive ? '#e0f7fa' : '#ffffff'
    };
  
    return (
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <p>{isDragActive ? 'Drop the files here...' : 'Drag & drop some files here, or click to select files'}</p>
      </div>
    );
  };
  
  export default StyledDropzone;
  