import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

const siteSettingsQuery = defineQuery(`*[_type == "siteSettings"][0]{
  ...,
  _id,
  siteTitle,
  description,
  logo,
  mainHeroImage{
    ...,
    hotspot,
    asset->{
      _id,
      url
    }
  },

  callToActionText,
  pricingDetails[]{
    tierName,
    price,
    description
  }
}`);

export async function getSiteSettings() {
  const { data } = await sanityFetch({
    query: siteSettingsQuery,
  });

  return data;
}
