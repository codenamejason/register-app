import { ok } from "assert";
import { NextRequest } from "next/server";

async function getResponse(req: NextRequest) {
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
