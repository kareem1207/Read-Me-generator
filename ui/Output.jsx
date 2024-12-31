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
    
    ${obj.imageAddresses.map((image,index)=>`Output ${index+1}: \n![image ${index+1}](${image.replace(" ","%20")})`).join("\n\t")}
    
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

    ${
        obj.techStacks.map((tech)=>`- ${tech}`).join("\n    ")
    }
    
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

    
    const copyToClickBoard = async () => {
        try {
            await navigator.clipboard.writeText(readMe);
            toast.success('Successfully copied! 🎉', {
                position: "bottom-right",
                autoClose: 2000,
                icon: "🚀",
                style: {
                    background: '#4CAF50',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }
            });
        } catch (err) {
            toast.error('Failed to copy! 😢\nFollowing Error occurred : '+err);
        }
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
        <ToastContainer />
    </div>
    </>
}