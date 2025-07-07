import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { client } from "../client";
export const getCommentsQuery =
  defineQuery(`*[_type == "comment" && post._ref == $postId] | order(createdAt asc) {
  _id,
  name,
  message,
  createdAt
}`);

export async function getComments(postId: string) {
  const { data } = await sanityFetch({
    query: getCommentsQuery,
    params: { postId },
  });
  return data;
}

export async function createComment({
  postId,
  name,
  message,
}: {
  postId: string;
  name: string;
  message: string;
}) {
  const comment = await client.create({
    _type: "comment",
    post: { _type: "reference", _ref: postId },
    name,
    message,
    createdAt: new Date().toISOString(),
  });
  return comment;
}
