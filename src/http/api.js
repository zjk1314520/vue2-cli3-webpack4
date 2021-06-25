const baseURL = 'http://47.100.56.212:8081/jqzkopm'

export default {
  /*
  * @param { Number } pageNum = [请求的页数]
  * @param { Number } pageSize = [请求时的条数]
  */
  getNavigationInf(){//新闻列表 
    return `${baseURL}/imps/getNavigationInf`
  },
}
