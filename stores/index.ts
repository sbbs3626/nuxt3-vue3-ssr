/*
 * @Author: Alan.zheng 
 * @Date: 2022-10-10 10:04:50 
 * @Last Modified by: Alan.zheng
 * @Last Modified time: 2022-10-10 10:06:21
 */
import { defineStore } from 'pinia'
export const useMainStore = defineStore({
    id: "main",
    state: () => ({
        code:1
    }),
    getters: {
        getCode:(state)=> {
            return state.code
        }  
    },
    actions: {
        setCode(code: string) {
            this.code = code
        },
    }
})