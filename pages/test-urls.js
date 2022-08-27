import Link from "next/link";
import React from "react";

const TestUrls = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "60px",
      }}
    >
      <Link href={"/about-us-2"}>about-us-2</Link>
      <Link href={"/api"}>api</Link>
      <Link href={"/blank"}>blank</Link>
      <Link href={"/blog-details-2"}>blog-details-2</Link>
      <Link href={"/blog-grid-2"}>blog-grid-2</Link>
      <Link href={"/blog-large-left-sidebar"}>blog-large-left-sidebar</Link>
      <Link href={"/blog-large-right-sidebar"}>blog-large-right-sidebar</Link>
      <Link href={"/coming-soon"}>coming-soon</Link>
      <Link href={"/contact-us-2"}>contact-us-2</Link>
      <Link href={"/demo"}>demo</Link>
      <Link href={"/digital-marketing"}>digital-marketing</Link>
      <Link href={"/ecommerce-product-uploading"}>
        ecommerce-product-uploading
      </Link>
      <Link href={"/enabling-business-transformation"}>
        enabling-business-transformation
      </Link>
      <Link href={"/error-404"}>error-404</Link>
      <Link href={"/faq-2"}>faq-2</Link>
      <Link href={"/fourth-knowmore"}>fourth-knowmore</Link>
      <Link href={"/hire-developers"}>hire-developers</Link>
      <Link href={"/hrmsknowmore"}>hrmsknowmore</Link>
      <Link href={"/index"}>index</Link>
      <Link href={"/intelligent-automation"}>intelligent-automation</Link>
      <Link href={"/it-development"}>it-development</Link>
      <Link href={"/know-more"}>know-more</Link>
      <Link href={"/leadership-1"}>leadership-1</Link>
      <Link href={"/leadership-2"}>leadership-2</Link>
      <Link href={"/leadership-3"}>leadership-3</Link>
      <Link href={"/new-about-us"}>new-about-us</Link>
      <Link href={"/new-contact-us"}>new-contact-us</Link>
      <Link href={"/our-partner-ecosystem"}>our-partner-ecosystem</Link>
      <Link href={"/pricing-table-2"}>pricing-table-2</Link>
      <Link href={"/privacy-policy"}>privacy-policy</Link>
      <Link href={"/resources-management"}>resources-management</Link>
      <Link href={"/services-2"}>services-2</Link>
      <Link href={"/services-details-2"}>services-details-2</Link>
      <Link href={"/sitedown"}>sitedown</Link>
      <Link href={"/team-2"}>team-2</Link>
      <Link href={"/terms-of-use"}>terms-of-use</Link>
      <Link href={"/test"}>test</Link>
      <Link href={"/test2"}>test2</Link>
      <Link href={"/third-knowmore"}>third-knowmore</Link>
      <Link href={"/thought-leadership"}>thought-leadership</Link>
      <Link href={"/validate"}>validate</Link>
      <Link href={"/voice-process"}>voice-process</Link>
      <Link href={"/voiceblend-process"}>voiceblend-process</Link>
      <Link href={"/_app"}>_app</Link>
      {/* DEMO */}

      <Link href={"/demo/aboutus3"}>aboutus3</Link>
      <Link href={"/demo/blog"}>blog</Link>
      <Link href={"/demo/crm"}>crm</Link>
      <Link href={"/demo/elaundry"}>elaundry</Link>
      <Link href={"/demo/hrms"}>hrms</Link>
      <Link href={"/demo/index"}>index</Link>
      <Link href={"/demo/second-page"}>second-page</Link>
    </div>
  );
};
export default TestUrls;
