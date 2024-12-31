import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable react/prop-types */
export const Output = ({obj})=>{
    const readMe =  `
    # ${obj.repoName} 

    ## Introduction
    
    ${obj.introductionContent}
    
    ## Description
    
    ${obj.descriptionContent}
    
    ## Images
    
    ${obj.imageAddresses.map((image,index)=>`![image ${index+1}](${image})`).join("\n\t")}
    
    ## Features
    
    ${
        obj.points? obj.features.map((feature,index)=>`${index+1}. ${feature}`).join("\n") : obj.features.map((feature)=>`- ${feature}`).join("\n")
    }
    
    ## Installation
    
    \`\`\`
    ${obj.installationStep}
    \`\`\`
    
    ## Usage
    
    ${obj.usage}
    
    ## Contributing Guidelines
    
    ${obj.contributingGuidelines}
    
    ## Tech Stacks
    
    ${obj.techStacks}
    `;

    
    const copyToClickBoard = ()=>{
        navigator.clipboard.writeText(readMe);
        toast("Copied to clipboard");
    }

    return <>
    <div style={{display:"flex",flexDirection:"column",width:"50%"}}>
        <div className="output">
            <pre>
            {readMe}
            </pre>
        </div>
        <button onClick={copyToClickBoard}>Click To Copy the content</button>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover  />
    </div>
    </>
}