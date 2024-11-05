import { useDropzone } from "react-dropzone";

const LimitedDropzone = () => {
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
      maxSize: 1048576, // 1 MB
      maxFiles: 3
    });
  
    return (
      <div {...getRootProps({ style: { border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' } })}>
        <input {...getInputProps()} />
        <p>Drop files here (maximum 3 files, each under 1MB)</p>
        {fileRejections.length > 0 && (
          <div>
            {fileRejections.map(({ file, errors }) => (
              <div key={file.path}>
                <p>{file.path} - {file.size} bytes</p>
                <ul>
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default LimitedDropzone;
  