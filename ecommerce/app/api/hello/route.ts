export async function GET() {
  return new Response(JSON.stringify({ message: "Hello, Next.js!" }), {
    status: 200,
  });
}
