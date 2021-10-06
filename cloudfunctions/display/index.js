// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const filelist = [
        'cloud://cloud1-6g2cqcnz66983332.636c-cloud1-6g2cqcnz66983332-1307712723/1.png'
    ]
    const result = await cloud.getTempFileURL({
        filelist: filelist,
    })
    return result.filelist
}