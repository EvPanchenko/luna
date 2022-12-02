import React from "react";
import styles from "./founder.module.scss";

export default function ChildrenStudioFounder() {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          {
            <div className={styles.studioFounderContent}>
              <div className={styles.studioFounderBlock}>
                <div className={styles.founderImg}>
                  <img src="/img/studio-founder.png" />
                </div>
                <p className={styles.founderText}>
                  Основатель центра-студии — народный артист России, создатель
                  «Театра Луны на Малой Ордынке» Сергей Проханов. Под его
                  руководством студия собрала профессиональный, увлеченный
                  коллектив единомышленников, которые терпеливо прививают детям
                  любовь к театру.
                </p>
                <div className={styles.founderTitle}>
                  <p className={styles.title}>Сергей Борисович Проханов</p>
                  <p>Президент театра</p>
                </div>
                <p className={styles.work}>
                  Народный артист России, заслуженный деятель искусств России
                </p>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}
