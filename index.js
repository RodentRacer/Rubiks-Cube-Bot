const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const fs = require("fs");

let cube = [0, 0, 0, null, null, null, 0, 0, 0, 0, 0, 10, null, null, null, 0, 0, 0, 0, 12, 0, null, null, null, 0, 13, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, null, null, null, 14, 0, 0, 0, 0, 11, null, null, null, 0, 0, 0, 0, 0, 0, null, null, null, 0, 0, 0, 0, 0, 0, null, null, null, 0, 0, 0, 0, 0, 15, null, null, null, 0, 0, 0, 0, 0, 0, null, null, null, 0, 0, 0];
let c = null
let wantedMessageID = null
let wantedChannelID = null

client.once("ready", () => {
    console.log("Ready!")
    cube = cubeFetch(cube)
    fs.readFile(`./cube/cubeChannel.txt`, 'utf-8', (error, wantedData) => {
        if (error) {
            throw error
        } else {wantedChannelID = wantedData}
    });
    fs.readFile(`./cube/cubeMessage.txt`, 'utf-8', (error, wantedData) => {
        if (error) {
            throw error
        } else {wantedMessageID = wantedData}
    });
});


function cubeRotate(face) {
    let extra = face[0];
    face[0] = face[6];
    face[6] = face[4];
    face[4] = face[2];
    face[2] = extra;
    extra = face[1];
    face[1] = face[7];
    face[7] = face[5];
    face[5] = face[3];
    face[3] = extra;
    return face;
};

function cubeShift(line) {
    let extra = line[0];
    line[0] = line[9];
    line[9] = line[6];
    line[6] = line[3];
    line[3] = extra;
    extra = line[1];
    line[1] = line[10];
    line[10] = line[7];
    line[7] = line[4];
    line[4] = extra;
    extra = line[2];
    line[2] = line[11];
    line[11] = line[8];
    line[8] = line[5];
    line[5] = extra;
    return line;
};

function cubeUp(cube) {
    let face = [cube[3], cube[4], cube[5], cube[14], cube[23], cube[22], cube[21], cube[12]];
    let line = [cube[32], cube[31], cube[30], cube[29], cube[28], cube[27], cube[102], cube[103], cube[104], cube[35], cube[34], cube[33]];
    face = cubeRotate(face);
    line = cubeShift(line);
    cube[3] = face[0];
    cube[4] = face[1];
    cube[5] = face[2];
    cube[14] = face[3];
    cube[23] = face[4];
    cube[22] = face[5];
    cube[21] = face[6];
    cube[12] = face[7];
    cube[32] = line[0];
    cube[31] = line[1];
    cube[30] = line[2];
    cube[29] = line[3];
    cube[28] = line[4];
    cube[27] = line[5];
    cube[102] = line[6];
    cube[103] = line[7];
    cube[104] = line[8];
    cube[35] = line[9];
    cube[34] = line[10];
    cube[33] = line[11];
    return cube;
};

function cubeBack(cube) {
    let face = [cube[84], cube[85], cube[86], cube[95], cube[104], cube[103], cube[102], cube[93]];
    let line = [cube[75], cube[76], cube[77], cube[53], cube[44], cube[35], cube[5], cube[4], cube[3], cube[27], cube[36], cube[45]];
    face = cubeRotate(face);
    line = cubeShift(line);
    cube[84] = face[0];
    cube[85] = face[1];
    cube[86] = face[2];
    cube[95] = face[3];
    cube[104] = face[4];
    cube[103] = face[5];
    cube[102] = face[6];
    cube[93] = face[7];
    cube[75] = line[0];
    cube[76] = line[1];
    cube[77] = line[2];
    cube[53] = line[3];
    cube[44] = line[4];
    cube[35] = line[5];
    cube[5] = line[6];
    cube[4] = line[7];
    cube[3] = line[8];
    cube[27] = line[9];
    cube[36] = line[10];
    cube[45] = line[11];
    return cube;
};

function cubeFront(cube) {
    let face = [cube[30], cube[31], cube[32], cube[41], cube[50], cube[49], cube[48], cube[39]];
    let line = [cube[21], cube[22], cube[23], cube[33], cube[42], cube[51], cube[59], cube[58], cube[57], cube[47], cube[38], cube[29]];
    face = cubeRotate(face);
    line = cubeShift(line);
    cube[30] = face[0];
    cube[31] = face[1];
    cube[32] = face[2];
    cube[41] = face[3];
    cube[50] = face[4];
    cube[49] = face[5];
    cube[48] = face[6];
    cube[39] = face[7];
    cube[21] = line[0];
    cube[22] = line[1];
    cube[23] = line[2];
    cube[33] = line[3];
    cube[42] = line[4];
    cube[51] = line[5];
    cube[59] = line[6];
    cube[58] = line[7];
    cube[57] = line[8];
    cube[47] = line[9];
    cube[38] = line[10];
    cube[29] = line[11];
    return cube;
};

function cubeDown(cube) {
    let face = [cube[57], cube[58], cube[59], cube[68], cube[77], cube[76], cube[75], cube[66]];
    let line = [cube[48], cube[49], cube[50], cube[51], cube[52], cube[53], cube[86], cube[85], cube[84], cube[45], cube[46], cube[47]];
    face = cubeRotate(face);
    line = cubeShift(line);
    cube[57] = face[0];
    cube[58] = face[1];
    cube[59] = face[2];
    cube[68] = face[3];
    cube[77] = face[4];
    cube[76] = face[5];
    cube[75] = face[6];
    cube[66] = face[7];
    cube[48] = line[0];
    cube[49] = line[1];
    cube[50] = line[2];
    cube[51] = line[3];
    cube[52] = line[4];
    cube[53] = line[5];
    cube[86] = line[6];
    cube[85] = line[7];
    cube[84] = line[8];
    cube[45] = line[9];
    cube[46] = line[10];
    cube[47] = line[11];
    return cube;
};

function cubeLeft(cube) {
    let face = [cube[27], cube[28], cube[29], cube[38], cube[47], cube[46], cube[45], cube[36]];
    let line = [cube[30], cube[39], cube[48], cube[57], cube[66], cube[75], cube[84], cube[93], cube[102], cube[3], cube[12], cube[21]];
    face = cubeRotate(face);
    line = cubeShift(line);
    cube[27] = face[0];
    cube[28] = face[1];
    cube[29] = face[2];
    cube[38] = face[3];
    cube[47] = face[4];
    cube[46] = face[5];
    cube[45] = face[6];
    cube[36] = face[7];
    cube[30] = line[0];
    cube[39] = line[1];
    cube[48] = line[2];
    cube[57] = line[3];
    cube[66] = line[4];
    cube[75] = line[5];
    cube[84] = line[6];
    cube[93] = line[7];
    cube[102] = line[8];
    cube[3] = line[9];
    cube[12] = line[10];
    cube[21] = line[11];
    return cube;
};

function cubeRight(cube) {
    let face = [cube[33], cube[34], cube[35], cube[44], cube[53], cube[52], cube[51], cube[42]];
    let line = [cube[104], cube[95], cube[86], cube[77], cube[68], cube[59], cube[50], cube[41], cube[32], cube[23], cube[14], cube[5]];
    face = cubeRotate(face);
    line = cubeShift(line);
    cube[33] = face[0];
    cube[34] = face[1];
    cube[35] = face[2];
    cube[44] = face[3];
    cube[53] = face[4];
    cube[52] = face[5];
    cube[51] = face[6];
    cube[42] = face[7];
    cube[104] = line[0];
    cube[95] = line[1];
    cube[86] = line[2];
    cube[77] = line[3];
    cube[68] = line[4];
    cube[59] = line[5];
    cube[50] = line[6];
    cube[41] = line[7];
    cube[32] = line[8];
    cube[23] = line[9];
    cube[14] = line[10];
    cube[5] = line[11];
    return cube;
};

function cubeVertical(cube) {
    let line = [cube[103], cube[94], cube[85], cube[76], cube[67], cube[58], cube[49], cube[40], cube[31], cube[22], cube[13], cube[4]];
    line = cubeShift(line);
    cube[103] = line[0];
    cube[94] = line[1];
    cube[85] = line[2];
    cube[76] = line[3];
    cube[67] = line[4];
    cube[58] = line[5];
    cube[49] = line[6];
    cube[40] = line[7];
    cube[31] = line[8];
    cube[22] = line[9];
    cube[13] = line[10];
    cube[4] = line[11];
    return cube;
};

function cubeHorizontal(cube) {
    let line = [cube[44], cube[43], cube[42], cube[41], cube[40], cube[39], cube[38], cube[37], cube[36], cube[93], cube[94], cube[95]];
    line = cubeShift(line);
    cube[44] = line[0];
    cube[43] = line[1];
    cube[42] = line[2];
    cube[41] = line[3];
    cube[40] = line[4];
    cube[39] = line[5];
    cube[38] = line[6];
    cube[37] = line[7];
    cube[36] = line[8];
    cube[93] = line[9];
    cube[94] = line[10];
    cube[95] = line[11];
    return cube;
};

function cubeSquare(cube) {
    let line = [cube[46], cube[37], cube[28], cube[12], cube[13], cube[14], cube[34], cube[43], cube[52], cube[68], cube[67], cube[66]];
    line = cubeShift(line);
    cube[46] = line[0];
    cube[37] = line[1];
    cube[28] = line[2];
    cube[12] = line[3];
    cube[13] = line[4];
    cube[14] = line[5];
    cube[34] = line[6];
    cube[43] = line[7];
    cube[52] = line[8];
    cube[68] = line[9];
    cube[67] = line[10];
    cube[66] = line[11];
    return cube;
};

function cubeTranslate(cube) {
    c = cube.map(ele => ele);
    for (let i = 0; i <= 107; i++) {
        if(c[i] === 0 || c[i] === '0') {
            c[i] = ":black_large_square:";
        } else if (c[i] === 1 || c[i] === '1') {
            c[i] = ":red_square:";
        } else if (c[i] === 2 || c[i] === "2") {
            c[i] = ":white_large_square:";
        } else if (c[i] === 3 || c[i] === '3') {
            c[i] = ":green_square:";
        } else if (c[i] === 4 || c[i] === '4') {
            c[i] = ":yellow_square:";
        } else if (c[i] === 5 || c[i] === '5') {
            c[i] = ":orange_square:";
        } else if (c[i] === 6 || c[i] === '6') {
            c[i] = ":blue_square:";
        } else if (c[i] === 10 || c[i] === '10') {
            c[i] = ":regional_indicator_u:";
        } else if (c[i] === 11 || c[i] === '11') {
            c[i] = ":regional_indicator_d:";
        } else if (c[i] === 12 || c[i] === '12') {
            c[i] = ":regional_indicator_l:";
        } else if (c[i] === 13 || c[i] === '13') {
            c[i] = ":regional_indicator_r:";
        } else if (c[i] === 14 || c[i] === '14') {
            c[i] = ":regional_indicator_f:";
        } else if (c[i] === 15 || c[i] === '15') {
            c[i] = ":regional_indicator_b:";
        }
    }
    return c;
}

function cubeWrite(number, data) {
    number = number.toString();
    data = data.toString();
    fs.writeFile(`./cube/cube${number}.txt`, data, 'utf-8', (error) => {
        if (error) throw error;
    });
};

async function cubeFetch(cube) {
    for (let i = 0; i <= 107; i++) {
        i = i.toString();
        fs.readFile(`./cube/cube${i}.txt`, 'utf-8', async function(error, wantedData) {
            if (error) {
                throw error
            }
            cube[i] = wantedData
        })
    }
    return(cube)
};

function cubeLog(cube) {
    for (let i = 0; i <= 107; i++) {
        cubeWrite(i, cube[i])
    }
    return cube;
};

async function cubeSend(c) {
    let wantedChannel = await client.channels.fetch(wantedChannelID);
	let wantedMessage = await wantedChannel.messages.fetch(wantedMessageID)
    wantedMessage.edit("."+c[0]+c[1]+c[2]+c[3]+c[4]+c[5]+c[6]+c[7]+c[8]+".\n."+c[9]+c[10]+c[11]+c[12]+c[13]+c[14]+c[15]+c[16]+c[17]+".\n."+c[18]+c[19]+c[20]+c[21]+c[22]+c[23]+c[24]+c[25]+c[26]+".\n."+c[27]+c[28]+c[29]+c[30]+c[31]+c[32]+c[33]+c[34]+c[35]+".\n."+c[36]+c[37]+c[38]+c[39]+c[40]+c[41]+c[42]+c[43]+c[44]+".\n."+c[45]+c[46]+c[47]+c[48]+c[49]+c[50]+c[51]+c[52]+c[53]+".\n."+c[54]+c[55]+c[56]+c[57]+c[58]+c[59]+c[60]+c[61]+c[62]+".\n."+c[63]+c[64]+c[65]+c[66]+c[67]+c[68]+c[69]+c[70]+c[71]+".\n."+c[72]+c[73]+c[74]+c[75]+c[76]+c[77]+c[78]+c[79]+c[80]+".\n."+c[81]+c[82]+c[83]+c[84]+c[85]+c[86]+c[87]+c[88]+c[89]+".\n."+c[90]+c[91]+c[92]+c[93]+c[94]+c[95]+c[96]+c[97]+c[98]+".\n."+c[99]+c[100]+c[101]+c[102]+c[103]+c[104]+c[105]+c[106]+c[107]+".")
}

client.on('message', async message => {
	if (message.content === ',start') {
        cube = [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 10, 1, 1, 1, 0, 0, 0, 0, 12, 0, 1, 1, 1, 0, 13, 0, 2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 2, 2, 3, 3, 3, 4, 4, 4, 2, 2, 2, 3, 3, 3, 4, 4, 4, 0, 0, 0, 5, 5, 5, 14, 0, 0, 0, 0, 11, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0, 0, 0, 15, 6, 6, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 0];
		cube.forEach(ele => {ele = ele.toString()})
        c = cubeTranslate(cube)
        let messageSend = await message.channel.send("."+c[0]+c[1]+c[2]+c[3]+c[4]+c[5]+c[6]+c[7]+c[8]+".\n."+c[9]+c[10]+c[11]+c[12]+c[13]+c[14]+c[15]+c[16]+c[17]+".\n."+c[18]+c[19]+c[20]+c[21]+c[22]+c[23]+c[24]+c[25]+c[26]+".\n."+c[27]+c[28]+c[29]+c[30]+c[31]+c[32]+c[33]+c[34]+c[35]+".\n."+c[36]+c[37]+c[38]+c[39]+c[40]+c[41]+c[42]+c[43]+c[44]+".\n."+c[45]+c[46]+c[47]+c[48]+c[49]+c[50]+c[51]+c[52]+c[53]+".\n."+c[54]+c[55]+c[56]+c[57]+c[58]+c[59]+c[60]+c[61]+c[62]+".\n."+c[63]+c[64]+c[65]+c[66]+c[67]+c[68]+c[69]+c[70]+c[71]+".\n."+c[72]+c[73]+c[74]+c[75]+c[76]+c[77]+c[78]+c[79]+c[80]+".\n."+c[81]+c[82]+c[83]+c[84]+c[85]+c[86]+c[87]+c[88]+c[89]+".\n."+c[90]+c[91]+c[92]+c[93]+c[94]+c[95]+c[96]+c[97]+c[98]+".\n."+c[99]+c[100]+c[101]+c[102]+c[103]+c[104]+c[105]+c[106]+c[107]+".");
		await messageSend.react("🇺").catch(err => {console.log(err)});
        await messageSend.react("🇩").catch(err => {console.log(err)});
        await messageSend.react("🇱").catch(err => {console.log(err)});
        await messageSend.react("🇷").catch(err => {console.log(err)});
        await messageSend.react("🇫").catch(err => {console.log(err)});
        await messageSend.react("🇧").catch(err => {console.log(err)});
        await messageSend.react("↔️").catch(err => {console.log(err)});
        await messageSend.react("↕️").catch(err => {console.log(err)});
        await messageSend.react("🔁").catch(err => {console.log(err)});
        cubeLog(cube);
        wantedMessageID = messageSend.id
        wantedChannelID = message.channel.id
        fs.writeFile(`./cube/cubeMessage.txt`, wantedMessageID, 'utf-8', (error) => {
            if (error) throw error;
        });
        fs.writeFile(`./cube/cubeChannel.txt`, wantedChannelID, 'utf-8', (error) => {
            if (error) throw error;
        });
	}
});


client.on("messageReactionAdd", async (reaction, user) => {
    if (reaction.message.id === wantedMessageID) {
        switch (reaction._emoji.name) {
            case "🇺":
                cube = await cubeUp(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "🇩":
                cube = await cubeDown(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "🇱":
                cube = await cubeLeft(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "🇷":
                cube = await cubeRight(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "🇫":
                cube = await cubeFront(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "🇧":
                cube = await cubeBack(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "↔️":
                cube = await cubeHorizontal(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "↕️":
                cube = await cubeVertical(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            case "🔁":
                cube = await cubeSquare(cube)
                c = await cubeTranslate(cube)
                await cubeLog(cube)
                if (!reaction.me) {
                    await reaction.users.remove(user)
                }
                await reaction.users.remove(user)
                cubeSend(c)
                break;
            default:
                if (!reaction.me) {
                    await reaction.remove(user)
                }
                break;
        }
    }
});

client.login('<enter your token here>');