import Counter from "./counter";

export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <main>
            <h1>Deployed with Bumboat</h1>
            <p>{process.env.GREETING || "Set GREETING in the Env tab and redeploy."}</p>
            <p>Rendered on the server at {new Date().toISOString()}</p>
            <Counter />
        </main>
    );
}
