const searchEarseConfig = { serverId: 8181, active: true };

function updatePRODUCT(payload) {
    let result = payload * 26;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module searchEarse loaded successfully.");