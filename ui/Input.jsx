import { useState } from "react"
import { Output } from "./Output";

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
    <form style={{display:"flex",flexDirection:"column",width:"50%"}} onSubmit={(e)=>handelSubmit(e)}>
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
        <label>Installation Step</label>
        <textarea type="text" placeholder="Installation Step" value={obj.installationStep} onChange={(e)=>setObj({...obj,installationStep:e.target.value})}/>
        <label>Usage</label>
        <textarea type="text" placeholder="Usage" value={obj.usage} onChange={(e)=>setObj({...obj,usage:e.target.value})}/>
        <label>Contributing Guidelines</label>
        <textarea type="text" placeholder="Contributing Guidelines" value={obj.contributingGuidelines} onChange={(e)=>setObj({...obj,contributingGuidelines:e.target.value})}/>
        <label>Tech Stacks</label>
        <textarea type="text" placeholder="Tech Stacks" value={obj.techStacks} onChange={(e)=>setObj({...obj,techStacks:e.target.value})}/>
        <button type="submit">Submit</button>
    </form>
    <Output obj={obj}/> 
    </>

}