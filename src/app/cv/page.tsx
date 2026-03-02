import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CV | Miras Zhandosov",
  description: "CV of Miras Zhandosov",
};

export default function CvPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <div className={styles.toolbar}>
          <div className={styles.title}>Miras Zhandosov CV</div>
          <a
            className={styles.downloadButton}
            href="/assets/portfolio/CV_Miras.pdf"
            download="Miras-Zhandosov-CV.pdf"
          >
            Download CV
          </a>
        </div>

        <div className={styles.mobileCard}>
          <p className={styles.mobileText}>
            On iPhone Safari, embedded PDF preview scales poorly. Open the full
            PDF in the browser viewer or download it directly.
          </p>
          <div className={styles.mobileActions}>
            <a
              className={styles.secondaryButton}
              href="/assets/portfolio/CV_Miras.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PDF
            </a>
            <a
              className={styles.downloadButton}
              href="/assets/portfolio/CV_Miras.pdf"
              download="Miras-Zhandosov-CV.pdf"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.viewer}>
          <iframe
            src="/assets/portfolio/CV_Miras.pdf#toolbar=1&navpanes=0&scrollbar=1&view=FitH&zoom=page-width"
            title="Miras Zhandosov CV"
          />
        </div>
      </div>
    </main>
  );
}
