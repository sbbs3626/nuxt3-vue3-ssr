/*
 * @Author: Alan.zheng 
 * @Date: 2022-10-10 09:12:14 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2022-10-10 12:04:02
 */

export const fetchConfig = {
    baseURL:'https://devzy.fsygroup.com/api',
    headers:{
        appid:"bd9d01ecc75dbbaaefce"
    },
}

//请求体封装
function useGetFetchOptions(options = {}){
    options.baseURL = options.baseURL ?? fetchConfig.baseURL
    options.headers = options.headers ?? {
        appid:fetchConfig.headers.appid
    }
    options.initialCache = options.initialCache ?? false
    options.lazy = options.lazy ?? false

    // 用户登录，默认传token
    const token = useCookie("token")
   
    if(token.value){ 
        options.headers.token = token.value
    }

    return options
}

//http请求封装
export async function useHttp(url: string, options?) {
    
    options = useGetFetchOptions(options)
    let res = await useFetch(url,{
        ...options,
        // 相当于响应拦截器
        transform: (res) => {
            if (res.code === 200) {
                return res.data
            } else {
                alert(res.msg)
                return res.code
            }
        },
    })

    // 客户端错误处理
    if(process.client && res.error.value){
        const msg = res.error.value?.data?.msg
        if(!options.lazy){
            alert(msg || '服务端错误')
        }
    }

    return res
}

// GET请求
export function useHttpGet(url,options = {}){
    options.method = "GET"
    return useHttp(url,options)
}

// POST请求
export function useHttpPost(url,options = {}){
    options.method = "POST"
    return useHttp(url,options)
}