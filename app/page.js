export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <main>
            <h1>Deployed with Bumboat</h1>
            <p>{process.env.GREETING || "Set GREETING in the Env tab and redeploy."}</p>
            Checkout <a href="https://github.com/9elt/bumboat">@9elt/bumboat</a>
            <p><i><small>rendered on the server at {new Date().toISOString()}</small></i></p>
        </main>
    );
}
