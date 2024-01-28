import React, { useState } from 'react'
import QRCode from 'react-qr-code'
const Qrcode = () => {
    let [name, setName] = useState("")
  return (
    <div className='B'>
        <div className='A'>
          <textarea name="" id="" cols="40" rows="10" placeholder='Enter your value' value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <h3>Scan This URL to get Output</h3>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 100, width: "100%" }}>
    <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={name}
    viewBox={`0 0 256 256`}
    />
</div>
    </div>
  )
}

export default Qrcode