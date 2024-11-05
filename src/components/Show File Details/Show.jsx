import { useDropzone } from "react-dropzone";

const FileDetailsDropzone = () => {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <div {...getRootProps({ style: { border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' } })}>
        <input {...getInputProps()} />
        <p>Drop files here, or click to select files</p>
        <ul>{files}</ul>
      </div>
    );
  };
  
  export default FileDetailsDropzone;
  