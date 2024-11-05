import { useDropzone } from "react-dropzone";

const UploadDropzone = () => {
    const onDrop = (acceptedFiles) => {
      const formData = new FormData();
      acceptedFiles.forEach(file => formData.append('files', file));
  
      fetch('https://file.io/', {
        method: 'POST',
        headers: {
            'Authorization': 'N2XRS2C.NNWH78E-9JVMTRK-J1VPX3F-CSAFHR1', // Replace with your actual API key
        },
        body: formData,
    })
      .then(response => response.json())
      .then(data => console.log('Upload successful:', data))
      .catch(error => console.error('Upload error:', error));
    };
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
    return (
      <div {...getRootProps({ style: { border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' } })}>
        <input {...getInputProps()} />
        <p>Drag & drop files to upload, or click to select files</p>
      </div>
    );
  };
  
  export default UploadDropzone;
  