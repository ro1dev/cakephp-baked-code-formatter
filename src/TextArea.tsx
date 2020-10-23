import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';

const TextArea = () => {
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
        toast('コピーしました');
    }
    return <React.Fragment>
        <div>
            <textarea className="w-100" cols={10000} rows={15} value={bakedCode} placeholder={placeHolderCode} onChange={(e) => { setBakedCode(e.target.value) } }></textarea>
        </div>
        <div className="text-center">
            <button className="btn btn-outline-primary py-3 px-5 rounded-pill m-2" onClick={() => convertBakedCodeToBeEasy(bakedCode)}>
            変換する
            </button>
            <button className="btn btn-outline-danger py-3 px-5 rounded-pill m-2" onClick={() => reset()}>リセット</button>
            <button className="btn btn-outline-success py-3 px-5 rounded-pill m-2" onClick={copyToClipboard}>
            コピー
            </button>
        </div>
        <div>
            <textarea id="copy" ref={textAreaRef} className="w-100" cols={10} rows={15} value={convertedCode} ></textarea>
        </div>
    </React.Fragment>
}

export default TextArea;