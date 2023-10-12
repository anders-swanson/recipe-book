import utilStyles from "../../../styles/utils.module.css";
import Layout from "../../../components/layout";

//+metadata
const metadata = {
  title: "Chewy Chocolate Chip Cookies",
  date: "2023-10-15",
  image:
    "https://lh3.googleusercontent.com/pw/AJFCJaWXplPsdSSnuh2Kf6CkpJ7WFWC0c3V8Okw_hzAL3q8SOLU0EL2oPwYRHGDDwFMVLKwZRcDGweW19rGX6jQckLQ_ls2hvDYeuEW4Ksktv02L4WwI1QAqL_rz4olOByA7PwEHthzblFHpq3JOAoBE5qvG=w653-h653-s-no?authuser=0",
  tags: ["desserts", "cookies"],
  preview: "Simple chocolate chip cookies with a great, chewy texture.",
};

export default function Post() {
  return (
    <Layout
      headerText={metadata.title}
      ogImage={metadata.image}
      related={{
        metadata: metadata,
        tag: "cookies",
      }}
    >
      <div className={utilStyles.flexGapContainer}></div>
    </Layout>
  );
}
