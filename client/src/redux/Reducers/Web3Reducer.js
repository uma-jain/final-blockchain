import { Action } from "history"
import {
  INIT_BLOCKCHAIN_REQUEST,INIT_BLOCKCHAIN_SUCCESS,INIT_BLOCKCHAIN_FAIL,
  GET_CANDIDATES_REQUEST,GET_CANDIDATES_SUCCESS,GET_CANDIDATES_FAILURE,
  VOTE_CANDIDATE_REQUEST,VOTE_CANDIDATE_FAILURE,VOTE_CANDIDATE_SUCCESS,
  ADD_CANDIDATES_REQUEST,ADD_CANDIDATES_SUCCESS,ADD_CANDIDATES_FAILURE,
  DELETE_CANDIDATES_REQUEST,DELETE_CANDIDATES_FAILURE,DELETE_CANDIDATES_SUCCESS,
  GET_ELECTION_PHASE_REQUEST,GET_ELECTION_PHASE_SUCCESS,GET_ELECTION_PHASE_FAILURE,

  STARTELECTION,
  STOPELECTION,
  SET_ACCOUNT,INIT_ELECTION_CONTRACT, INIT_ELECTION_CONTRACT_LOADING, ELECTION_PHASE_CHANGE_REQUEST, ELECTION_PHASE_CHANGE_SUCCESS,


} from "../actions"


const initialState={
  web3:null,
  web3Loading:false,
  web3LoadingError:false,
  initContractLoading:true,
    ElectionInstance:null,
  contractOwnerAddress:null,
  candidates:[],
  candidateLoading:false,
  get_candidateerror:false,
  account:null,

  adminData:{
     loading :false,
     addCandidateSuccess:false,
     deleteCandidateSuccess:false,
     electionphaseloading:true,
     electionphase:null,
  }
    
}


export const  web3Reducer=(state=initialState,action)=>{
    switch(action.type){

      case INIT_BLOCKCHAIN_REQUEST:
        return{
           ...state,
           web3Loading:true, 
        }
        case INIT_BLOCKCHAIN_SUCCESS:
          return{
             ...state,
             web3:action.payload,
             web3Loading:false
          } 
          case INIT_ELECTION_CONTRACT_LOADING:
            return{
              ...state,
              initContractLoading:true
            }
        
          case INIT_ELECTION_CONTRACT:
            return{
              ...state,
              ElectionInstance:action.payload,
              initContractLoading:false
            }
          case SET_ACCOUNT :
            return {
              ...state,
              account:action.payload, 
            }
          case INIT_BLOCKCHAIN_FAIL:
            return{
               ...state,
               web3LoadingError:action.payload, 
            }


        case GET_CANDIDATES_REQUEST:
          return{
             ...state,
             candidateLoading:true, 
          }
          case GET_CANDIDATES_SUCCESS:
            return{
               ...state,
               candidates:action.payload , 
               candidateLoading:false, 
            }
            case GET_CANDIDATES_FAILURE:
              return{
                 ...state,
                 get_candidateerror:action.payload , 
                 candidateLoading:false, 
              }
         
        case ADD_CANDIDATES_REQUEST:
          return{
            ...state,
            adminData:{
              loading :true,
           }, 
         
          
        }
        case ADD_CANDIDATES_SUCCESS:   
         return{
          ...state,
          adminData:{
            loading :false,
            addCandidateSuccess:true,
         } 
       }
        case DELETE_CANDIDATES_REQUEST:  
          return{
          ...state,
          adminData:{
            loading :true,
         }
       }
        case DELETE_CANDIDATES_SUCCESS:
          return{
            ...state,
            adminData:{
              loading :false,
              deleteCandidateSuccess:true, 
           }
           
         }
         case GET_ELECTION_PHASE_REQUEST:  
          return{
          ...state,
          adminData:{
            electionphaseloading:true,
         }
       }
       case GET_ELECTION_PHASE_SUCCESS:  
          return{
          ...state,
          adminData:{
            electionphaseloading:false,
            electionphase:action.payload
         }
       }
     default :
     return state;  
    }
    }