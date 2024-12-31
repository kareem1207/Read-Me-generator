import { useState } from "react"
import { Output } from "./Output";
import styles from "../css/Input.module.css";
import "../css/body.css";

export const Input = () =>{

    const [points,setPoints]=useState(false);

    const [obj,setObj]=useState({
        repoName:"",
        introductionContent:"",
        descriptionContent:"",
        imageAddresses:[],
        features:[],
        featuresMetrics:points,
        installationStep:"",
        usage:"",
        contributingGuidelines:"",
        techStacks:"",
        note:"",
        tip:"",
        important:"",
        warning:"",
        caution:"",
    })

    const handelImage = (evt)=>{
        const value = evt.target.value.split(",");
        console.log(value);
        setObj({...obj, imageAddresses: value});
    }

    const handelFeatures = (evt)=>{
        const value = evt.target.value;
        const features = value.includes(';') ? value.split(';') : [value];
        console.log(value);
        setObj({...obj, features: features});
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(obj);
    }

    return <>
    <h1 className={styles["heading"]}>ReadMe generator</h1>
    <div className={styles["input-container"]}>
    <form className={styles["form-container"]} onSubmit={(e)=>handelSubmit(e)}>
        <label>Repository Name</label>
        <input type="text" placeholder="Repository Name" value={obj.repoName} onChange={(e)=>setObj({...obj,repoName:e.target.value})}/>
        <label>Introduction Content</label>
        <input type="text" placeholder="Introduction Content" value={obj.introductionContent} onChange={(e)=>setObj({...obj,introductionContent:e.target.value})}/>
        <label>Description Content</label>
        <textarea type="text" placeholder="Description Content" value={obj.descriptionContent} onChange={(e)=>setObj({...obj,descriptionContent:e.target.value})}/>
        <label>Image Addresses</label>
        <textarea  type="text" placeholder="Image Addresses (separate addresses by a comma ',') " value={obj.imageAddresses} onChange={(evt)=>handelImage(evt)}/>
        <label>Features</label>
        <textarea type="text" placeholder="Features (separate addresses by a semi colon ';') " value={obj.features.join(';')} onChange={(e)=>handelFeatures(e)} spellCheck="false" />
        <button onClick={()=>setPoints(!points)} > Click If you want in points</button>
        <br/>
        <label>Installation Step</label>
        <textarea type="text" placeholder="Installation Step" value={obj.installationStep} onChange={(e)=>setObj({...obj,installationStep:e.target.value})}/>
        <label>Usage</label>
        <textarea type="text" placeholder="Usage" value={obj.usage} onChange={(e)=>setObj({...obj,usage:e.target.value})}/>
        <label>Contributing Guidelines</label>
        <textarea type="text" placeholder="Contributing Guidelines" value={obj.contributingGuidelines} onChange={(e)=>setObj({...obj,contributingGuidelines:e.target.value})}/>
        <label>Tech Stacks</label>
        <textarea type="text" placeholder="Tech Stacks" value={obj.techStacks} onChange={(e)=>setObj({...obj,techStacks:e.target.value})}/>
        <h3>Admonitions (only one lines) :</h3>
        <label>Note</label>
        <input type="text" placeholder="Note" value={obj.note} onChange={(e)=>setObj({...obj,note:e.target.value})}/>
        <label>Tip</label>
        <input type="text" placeholder="Tip" value={obj.tip} onChange={(e)=>setObj({...obj,tip:e.target.value})}/>
        <label>Important</label>
        <input type="text" placeholder="Important" value={obj.important} onChange={(e)=>setObj({...obj,important:e.target.value})}/>
        <label>Warning</label>
        <input type="text" placeholder="Warning" value={obj.warning} onChange={(e)=>setObj({...obj,warning:e.target.value})}/>
        <label>Caution</label>
        <input type="text" placeholder="Caution" value={obj.caution} onChange={(e)=>setObj({...obj,caution:e.target.value})}/>
        <button type="submit">Submit</button>
    </form>
    </div>
    <Output obj={obj}/> 
    </>

}