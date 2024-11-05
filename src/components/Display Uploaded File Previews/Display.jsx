import { useDropzone } from "react-dropzone";

const PreviewDropzone = () => {
    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
      accept: { 'image/*': [] }
    });
  
    const previews = acceptedFiles.map(file => (
      <div key={file.path}>
        <img src={URL.createObjectURL(file)} alt={file.path} style={{ width: '100px', height: '100px', objectFit: 'cover', margin: '10px' }} />
        <p>{file.path}</p>
      </div>
    ));
  
    return (
      <div {...getRootProps({ style: { border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' } })}>
        <input {...getInputProps()} />
        <p>Drag & drop some images here, or click to select images</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {previews}
        </div>
      </div>
    );
  };
  
  export default PreviewDropzone;
  