"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './UserAvatarIcon.module.css'; // ✅ Pfad stimmt jetzt!

export default function UserAvatar() {
    const [visible, setVisible] = useState(true);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(false);
            setTimeout(() => setVisible(false), 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            <Image
                src="/Bild_Urlaubsflieger.jpg"
                alt="Urlaubsflieger"
                fill
                className={styles.image}
                priority
            />
            {visible && (
                <div className={`${styles.text} ${!fade ? styles.textHidden : ''}`}>
                    Willkommen auf meiner Website
                </div>
            )}
        </div>
    );
}