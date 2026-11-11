import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const FILE_NAME = "ZMI-Korona-portfolio.html";

export async function GET() {
  const filePath = join(process.cwd(), "public", FILE_NAME);
  try {
    await stat(filePath);
  } catch {
    return NextResponse.json(
      { error: "Файл портфолио не найден. Сгенерируйте его: bun run scripts/export-portfolio.ts" },
      { status: 404 }
    );
  }

  const file = await readFile(filePath);
  return new NextResponse(new Uint8Array(file), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${FILE_NAME}"`,
      "Content-Length": String(file.byteLength),
      "Cache-Control": "no-store",
    },
  });
}
