import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "n2c6ck6d",
  dataset: "production",
  apiVersion: "2023-03-29",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
