const { execSync } = require("child_process");

const command = process.argv.slice(2).join(" ");

try {
  execSync(`cargo ${command}`, { stdio: "inherit" });
} catch (error) {
  console.error(`Error executing cargo command: ${command}`);
  process.exit(1);
}
