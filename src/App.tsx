import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const placeHolderCode = `ここにペースト\n例:\n$validator\n\t->integer('id')\n\t->allowEmptyString('id', null, 'create');\n$validator\n\t->scalar('nickname')\n\t->maxLength('nickname', 255)\n\t->requirePresence('nickname', 'create')\n\t->notEmptyString('nickname')\n\t->add('nickname', 'unique', ['rule' => 'validateUnique', 'provider' => 'table']);`
  const [bakedCode, setBakedCode] = useState<string>('');
  const [convertedCode, setConvertedCode] = useState<string>('');
  const textAreaRef = useRef<any>();

// 変換
  const convertBakedCodeToBeEasy = (code: string) => {
    const firstConvertedCode = code.replace(/\s+/g, '');
    const result = firstConvertedCode.replace(/;+/g, ';\n');
    setConvertedCode(result);
  }

  function copyToClipboard(e: any) {
    if (textAreaRef.current) {
      textAreaRef.current!.select();
      document.execCommand('copy');
      e.target.focus();
      toastForCopy();
    }
  }

  const reset = () => {
    setBakedCode('');
    setConvertedCode('');
  }

  const toastForCopy = () => {
    toast('copied');
  }

  return (
    <div>
      <h1>convert cakephp baked source code</h1>
      <ToastContainer />
      <div>
        <textarea className="w-100" cols={10000} rows={10} value={bakedCode} placeholder={placeHolderCode} onChange={(e) => { setBakedCode(e.target.value) } }></textarea>
      </div>
      <button className="btn btn-outline-primary" onClick={() => convertBakedCodeToBeEasy(bakedCode)}>
        convert
      </button>
      <button className="btn btn-outline-danger" onClick={() => reset()}>reset</button>
      <button className="btn btn-outline-success" onClick={copyToClipboard}>
        copy
      </button>
      <div>
        <textarea id="copy" ref={textAreaRef} className="w-100" cols={10} rows={10} value={convertedCode} ></textarea>
      </div>
    </div>
  );
}

export default App;
