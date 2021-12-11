import { useEffect, useRef } from "react";
interface PreviewProps {
  code: string;
}
const html = `
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
      <div id="root">
      </div>
      <script>
      window.addEventListener('message',(event)=>{
          try{
            eval(event.data);
          }catch(err){
            const root=document.querySelector('#root');
            root.innerHTML='<div style="color:red"><h4>Runtime Error:</h4> '+err+'</div>'
          }
        
      },false)
      </script>
    </body>
    </html>
        `;
const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iframe = useRef<any>();
  useEffect(() => {
    iframe.current.srcdoc = html;
    iframe.current.contentWindow.postMessage(code, "*");
  }, [code]);

  return (
    <iframe
      title="frame"
      ref={iframe}
      width={400}
      height={400}
      sandbox="allow-scripts"
      srcDoc={html}
    />
  );
};
export default Preview;