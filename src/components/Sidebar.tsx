import { useState } from "react"
import { FolderCloseIcon } from "../icons/folderCloseIcon"
import { ToggleIcon } from "../icons/ToggleIcon"
import { SidebarItem } from "./SidebarItem"
import { FolderOpenIcon } from "../icons/folderOpenIcon"
import { HtmlIcon } from "../icons/htmlIcon"
import { GithubIcon } from "../icons/GithubIcon"
import { LinkedinIcon } from "../icons/LinkedinIcon"



export const Sidebar = ()=>{
    const [about, setAbout] = useState(true);
    const [sidebar, setSidebar] = useState(true);
    const [projects, setProjects] = useState(true);


    return <div className={`flex bg-neutral-900 text-white ${sidebar ? "w-70" : "w-10"}`}>
        <div className="border-r-1 h-screen w-10 pt-1 " onClick={()=>{
            setSidebar(c => !c);
        }}>
            {<ToggleIcon/>}
        </div>
        {sidebar ? <div>

            <div className="mb-0 pb-0">
                <button onClick={()=>{
                setAbout(c => !c);
            }}>
                <SidebarItem type="folder" startIcon={about ? <FolderOpenIcon/> : <FolderCloseIcon/> } text="Utkarsh_Sharma"/> 
            </button>
                {/* about utkarsh content here */}
                {about ? <div>                
                    <div>{<SidebarItem type="file" startIcon={<HtmlIcon/>} text="About_Utkarsh.html"/>}</div>            
                    <div>{<SidebarItem type="file" startIcon={<GithubIcon/>} text="Github.com"/>}</div>                             
                    <div>{<SidebarItem type="file" startIcon={<LinkedinIcon/>} text="linkedin.com"/>}</div>                             
                </div> : null}
            </div>
            <div>
                <button onClick={()=>{
                setProjects(c => !c);
            }}>
                <SidebarItem  type="folder" startIcon={projects ? <FolderOpenIcon/> : <FolderCloseIcon/> } text="Projects"/> 
            </button>
            </div>
        </div> 

        : null}
    </div>
}