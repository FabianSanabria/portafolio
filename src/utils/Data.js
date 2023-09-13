import {FaReact, FaNode, FaCss3Alt, FaLaravel, FaWordpress} from 'react-icons/fa';
import {SiDjango, SiJavascript, SiPhp} from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project3 from '../assets/Project3.PNG';



export const Skills =  [
    {
        id: 0 ,
        tech:'React JS',
        icon: <FaReact/>
    },
    {
        id: 1 ,
        tech:'Django',
        icon: <SiDjango/>
    },
    {
        id: 2 ,
        tech:'PHP',
        icon: <SiPhp/>
    },
    {
        id: 3 ,
        tech:'Javascript',
        icon: <SiJavascript/>
    },
    {
        id: 4 ,
        tech:'Laravel',
        icon: <FaLaravel/>
    },
    {
        id: 5 ,
        tech:'Wordpress',
        icon: <FaWordpress/>
    },
]

export const projectDetails = [
    {
        id: 0,
        project_name:"Sistema Justificación de Inasistencias",
        project_desc:"Sistema que permite realizar justificación de inasistencias por parte de alumnos.",
        tech_stack: ["React JS","Express","Django"],
        project_img: Project1,
        project_url: "https://github.com/FabianSanabria/Proyecto_Justificacion_Inasistencias",
        reverse:false,
    },
    {
        id: 1,
        project_name:"Artésol: Infusiones que Sanan",
        project_desc:"Página web de Ecommerce relacionada a la venta de tés.",
        tech_stack: ["Wordpress"],
        project_img: Project2,
        project_url: "https://www.artesol.cl",
        reverse:true,
    },
    {
        id: 2,
        project_name:"Sistema de control Universitario",
        project_desc:"Sistema de CRUD para estudiantes y carreras",
        tech_stack: ["Laravel"],
        project_img: Project3,
        project_url: "https://github.com/FabianSanabria/proyecto_ingSoftware",
        reverse:false,
    }
]   
export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home',

    },
    {
        id: 1,
        name: 'Habilidades',
        href: 'Skills',
        
    },
    {
        id: 2,
        name: 'Proyectos',
        href: 'Projects',
        
    },

]   