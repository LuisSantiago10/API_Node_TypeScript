export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type  Visicility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry{
    id: number,
    date: string,
    weather: Weather,
    visibility: Visicility,
    comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry,'comment'>
export type NewDiaryEntry = Omit<DiaryEntry,'id'>