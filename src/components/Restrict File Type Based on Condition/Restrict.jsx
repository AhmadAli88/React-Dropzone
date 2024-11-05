import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ConditionalDropzone = () => {
  const [allowOnlyPDF, setAllowOnlyPDF] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: allowOnlyPDF ? { 'application/pdf': [] } : undefined,
  });

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={allowOnlyPDF}
          onChange={() => setAllowOnlyPDF(!allowOnlyPDF)}
        />
        Allow only PDF files
      </label>
      <div {...getRootProps({ style: { border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' } })}>
        <input {...getInputProps()} />
        <p>Drop files here, or click to select files</p>
      </div>
    </div>
  );
};

export default ConditionalDropzone;
