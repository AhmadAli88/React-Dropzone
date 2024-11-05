import './App.css';
import ImageDropzone from './components/Accept Specific File Types/Accept';
import BasicDropzone from './components/Basic File Drop/Basic';
import StyledDropzone from './components/Custom Styling on Drag/Custom';
import PreviewDropzone from './components/Display Uploaded File Previews/Display';
import UploadDropzone from './components/Handling File Uploads/Upload';
import LimitedDropzone from './components/Limit File Size and File Count/Limit';
import ConditionalDropzone from './components/Restrict File Type Based on Condition/Restrict';
import FileDetailsDropzone from './components/Show File Details/Show';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center'}}>
      <BasicDropzone />
      <ImageDropzone/>
      <StyledDropzone/>
      <PreviewDropzone/>
      <UploadDropzone/>
      <LimitedDropzone/>
      <ConditionalDropzone/>
      <FileDetailsDropzone/>
    </div>
  );
}

export default App;
