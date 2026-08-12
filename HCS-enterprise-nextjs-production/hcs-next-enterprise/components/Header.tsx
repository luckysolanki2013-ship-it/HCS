'use client';
import Link from 'next/link';
import {useState} from 'react';
const groups=[
 {name:'Industries',items:[['Food & Beverage','/industries#food'],['Fashion & Lifestyle','/industries#fashion'],['Beauty & Personal Care','/industries#beauty'],['Health & Wellness','/industries#health'],['FMCG & Consumer Products','/industries#fmcg'],['D2C Brands','/industries#d2c']]},
 {name:'Services',items:[['E-commerce & Marketplace','/services#commerce'],['Performance Marketing','/services#performance'],['Website & Technology','/services#technology'],['Business Advisory','/services#advisory'],['Brand Development','/services#brand'],['Digital Transformation','/services#transformation']]}
];
export default function Header(){const [open,setOpen]=useState(false);return <>
<div className="utility"><span>Hubooze Consultancy Services</span><span>India · Growth · Digital Transformation</span></div>
<header className="header"><Link href="/" className="brand"><img src="/assets/hcs-logo.png" alt="HCS"/></Link><button className="mobileMenu" onClick={()=>setOpen(!open)} aria-label="Menu">☰</button>
<nav className={open?'nav open':'nav'}>{groups.map(g=><div className="navDrop" key={g.name}><span>{g.name}⌄</span><div className="mega">{g.items.map(([label,href])=><Link key={label} href={href} onClick={()=>setOpen(false)}>{label}<small>↗</small></Link>)}</div></div>)}<Link href="/solutions" onClick={()=>setOpen(false)}>Solutions</Link><Link href="/insights" onClick={()=>setOpen(false)}>Insights</Link><Link href="/about" onClick={()=>setOpen(false)}>Who We Are</Link><Link href="/careers" onClick={()=>setOpen(false)}>Careers</Link></nav>
<Link className="headerCta" href="/contact">Contact us ↗</Link></header></>}
