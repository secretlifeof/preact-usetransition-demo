import React, { useCallback } from 'react'
import styled from 'styled-components'

import { useDispatch } from 'redux-react-hook'
import { changeBooleansToggle, setActiveID } from 'actions'

const Main = styled.section`
	width: 100%;
	padding-left: var(--main-padding);
	padding-right: var(--main-padding);
	padding-bottom: 5vh;
	text-transform: uppercase;
	background: ${(props) => props.theme.indexBGColor};
	height: 100%;
	position: relative;
	color: ${(props) => props.theme.indexFontColor};

	.title {
		text-align: center;
		padding-top: var(--main-padding);
		font-size: 1.5em;
	}

	.project {
		font-size: 0.8em;
	}
	hr {
		grid-column: 1 / span 3;
		display: none;
		width: calc(100vw - var(--main-padding));
		position: relative;
		left: calc(var(--main-padding) / -2);
		border: 0;
		border-bottom: 1px solid;
		opacity: 0.5;
	}
	.line:last-child {
		display: initial;
	}
	.line:nth-child(6n):not(:last-child) {
		display: initial;
	}
	.moreButtonFrame {
		padding: 5vh 0 0 0;
		display: flex;
		justify-content: center;
	}
	.moreButton {
		width: 35vw;
		height: 4rem;
		border: 1px solid #9c9c9c;

		text-align: center;
		padding-top: 0.5vh;
	}

	@media (hover) {
		.categoryItem:hover {
			opacity: var(--hover-opacity);
		}
	}

	@media only screen and (max-width: 1024px) {
		font-size: 2em;

		.title {
			font-size: 1.1em;
		}
		.project {
			font-size: 0.5em;
		}
		hr {
			grid-column: 1 / span 2;
			display: none;
			padding-top: 1vh;
			margin-bottom: 1.8vh;
		}
		.line:nth-child(3n):not(:last-child) {
			display: none;
		}
		.line:nth-child(4n):not(:last-child) {
			display: initial;
		}
		.moreButtonFrame > * {
			width: 100%;
		}
		.moreButton {
			width: 100%;
			height: 8rem;
		}
	}
	@media only screen and (max-width: 767px) {
		font-size: 1.45em;

		.title {
			font-size: 1.3em;
		}
		.project {
			font-size: 1.2em;
		}
	}

	@media only screen and (min-width: 1700px) {
		.filter {
			padding-top: calc(var(--main-padding) * 1.6);
		}
	}
`

const Button = styled.div`
	padding: 2vw;
	height: 10vh;
	width: 10vw;
	background: green;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50vh;
	left: 50vw;
	transform: translate(-50%, -50%);
	cursor: pointer;

	@media (hover) {
		&:hover {
			background: blue;
		}
	}
`

const IndexList = ({ title, filterCategory, match }) => {
	const dispatch = useDispatch()
	const viewProjectDetail = useCallback(() => {
		dispatch(setActiveID('projectDetail', 1))
		dispatch(changeBooleansToggle('projectDetail'))
	}, [])

	const doAction = () => {
		viewProjectDetail(true)
	}

	return (
		<Main>
			<Button onClick={doAction}>
				<div>HUG ME</div>
			</Button>
		</Main>
	)
}

IndexList.defaultProps = {
	title: true,
	filterCategory: false
}

export default IndexList
