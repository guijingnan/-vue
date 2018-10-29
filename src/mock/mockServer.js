import Mock from 'mockjs'
import homeData from './home.json'
import knowledgeData from './shiwu_data.json'
import fenleiData from './fenlei_data.json'
Mock.mock('/home',{code:0,data:homeData});
Mock.mock('/knowledge',{code:0,data:knowledgeData});
Mock.mock('/classify',{code:0,data:fenleiData});
Mock.mock('/shopping',{code:0,data:knowledgeData});
Mock.mock('/personal',{code:0,data:knowledgeData});

