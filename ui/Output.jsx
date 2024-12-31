/* eslint-disable react/prop-types */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "../css/Output.module.css";
import "../css/body.css";

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
        obj.featuresMetrics? obj.features.map((feature,index)=>`${index+1}. ${feature}`).join("\n    ") : obj.features.map((feature)=>`- ${feature}`).join("\n   ")
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

    ${
        obj.note !==""? `> [!NOTE]\n    > ${obj.note}` : ""
    }

    ${
        obj.tip !==""? `> [!TIP]\n    > ${obj.tip}` : ""
    }

    ${
        obj.important !==""? `> [!IMPORTANT]\n    > ${obj.important}` : ""
    }

    ${
        obj.warning !==""? `> [!WARNING]\n    > ${obj.warning}`: ""
    }

    ${
        obj.caution !==""? `> [!CAUTION]\n    > ${obj.caution}` : ""
    }
    
    `;

    
    const copyToClickBoard = ()=>{
        navigator.clipboard.writeText(readMe);
        toast("Copied to clipboard");
    }

    return <>
    <h1 className={styles["heading"]}>Output</h1>
    <div className={styles['output-container']}>
        <div className={styles['output']}>
            <pre>
            {readMe}
            </pre>
        <button onClick={copyToClickBoard}>Click To Copy the content</button>
        </div>
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