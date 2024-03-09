export default async function GithubStatsLoader() {
   const result = await fetch("https://api.github.com/users/saif-gitreps");
   return result.json();
}
