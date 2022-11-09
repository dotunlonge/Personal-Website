import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="dark-bg flex" style={{
          textAlign: "center",
          margin: "0 auto 2em",
          padding: '0rem 2rem 0rem 2rem',
          lineHeight: '1.5em', fontSize: '0.7em'
      }}>
            <span style={{ textAlign: 'center', margin: 'auto', fontSize: "14px" }} className="white">
              Copyright © {year} <Link href="/">Oludotun Longe</Link> - All Rights Reserved.
            </span>
        </footer>
    )
}
