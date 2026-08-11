import type React from 'react';
'use client';
import {useEffect,useRef} from 'react';
export default function Reveal({children,className='' }:{children:React.ReactNode,className?:string}){const ref=useRef<HTMLDivElement>(null);useEffect(()=>{const el=ref.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('in');o.disconnect()}},{threshold:.12});o.observe(el);return()=>o.disconnect()},[]);return <div ref={ref} className={'reveal '+className}>{children}</div>}
