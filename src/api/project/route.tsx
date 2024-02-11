import { NextRequest } from "next/server";

async function getResponse(req: NextRequest) {
  // todo: update this
  console.log("req.nextUrl", req.nextUrl);

  // const address = req.nextUrl.pathname.split('/')[3];

  // Fetch the project data from the indexer

  // Return the project data

  return new Response(JSON.stringify({ message: "Hello World" }));
}

export async function POST(req: NextRequest): Promise<Response> {
  const body = req.body;

  if (body) {
    return getResponse(req);
  }
  return getResponse(req);
}

export const dynamic = "force-dynamic";
