import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable'
import axios from 'axios';

const changeTopicList = (data) => ({
	type: actionTypes.CHANGE_TOPIC_LIST,
	data: fromJS(data)
})

const changeList = (data) => ({
	type: actionTypes.CHANGE_LIST,
	data: fromJS(data),
})

const changeRecommendList = (data) => ({
	type: actionTypes.CHANGE_RECOMMEND_LIST,
	data: fromJS(data),
})

export const handleMouseEnter = () => ({
	type: actionTypes.HANDLE_MOUSE_ENTER,
})

export const handleMouseLeave = () => ({
	type: actionTypes.HANDLE_MOUSE_LEAVE,
})

export const getTopicList = () => {
	return (dispatch) => {
		axios.get('api/homeList.json').then((res) => {
			const data = res.data
			dispatch(changeTopicList(data.topicList))
		}).catch(() => {
			console.log('error')
		})
	}
}

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res) => {
			const data = res.data
			dispatch(changeList(data.articleList))
		}).catch(() => {
			console.log('error')
		})
	}
}

export const getRecommendList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res) => {
			const data = res.data
			dispatch(changeRecommendList(data.recommendList))
		}).catch(() => {
			console.log('error')
		})
	}
}












